import { useState, useEffect } from "react";
import { useNavigation, useActionData, Form } from "react-router";
import type { Challenge } from "~/firebase/challenges";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { CheckCircle, AlertCircle, Plus } from "lucide-react";
import { Alert, AlertDescription } from "~/components/ui/alert";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

interface SubmissionDialogProps {
  challenge: Challenge;
  userId: string;
  onClose: () => void;
}
interface ActionData {
  success?: boolean;
  error?: string;
  message?: string;
}

export default function SubmissionDialog({
  challenge,
  userId,
  onClose,
}: SubmissionDialogProps) {
  const navigation = useNavigation();
  const actionData = useActionData() as ActionData;
  const isSubmitting = navigation.state === "submitting";

  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [shaHash, setShaHash] = useState("");

  useEffect(() => {
    if (actionData?.success) {
      onClose();
    }
  }, [actionData, onClose]);

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Submit Solution for {challenge.title || "Challenge"}
          </DialogTitle>
        </DialogHeader>

        {actionData?.error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{actionData.error}</AlertDescription>
          </Alert>
        )}

        {actionData?.success && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              {actionData.message || "Challenge created successfully!"}
            </AlertDescription>
          </Alert>
        )}
        <Form method="post">
          <input type="hidden" name="intent" value="submit-challenge" />
          <input type="hidden" name="challengeId" value={challenge.id} />
          <input type="hidden" name="userId" value={userId} />
          <input type="hidden" name="title" value={challenge.title} />
          <input type="hidden" name="comapnyName" value={challenge.company} />
          <div className="space-y-4">
            <div>
              <Label>Challenge Description</Label>
              <p className="text-muted-foreground font-light text-sm mb-4 flex-1 line-clamp-3">
                {challenge.details.fullDescription ||
                  "No description available."}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="githubUrl">GitHub URL</Label>
              <Input
                id="githubUrl"
                name="githubUrl"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="Enter GitHub repository URL (e.g., https://github.com/username/repo)"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="githubUrl">Live URL</Label>
              <Input
                id="liveUrl"
                name="liveUrl"
                value={liveUrl}
                onChange={(e) => setLiveUrl(e.target.value)}
                placeholder="Enter LiveURL of your solution (e.g., https://bitnob.com)"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="shaHash">SHA-256 Hash (Optional)</Label>
              <Input
                id="shaHash"
                name="shaHash"
                value={shaHash}
                onChange={(e) => setShaHash(e.target.value)}
                placeholder="Enter SHA-256 hash of a key file (e.g., App.js)"
              />
            </div>

            <DialogFooter className="mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Challenge
                  </>
                )}
              </Button>
            </DialogFooter>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
