import { useState, useEffect } from "react";
import { useNavigation, useActionData, Form } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "~/components/ui/dialog";

import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

interface SubmissionDialogProps {
  challengeId: string;
  onClose: () => void;
}

export default function SubmissionDialog({
  challengeId,
  onClose,
}: SubmissionDialogProps) {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);
  const [reviewStatus, setReviewStatus] = useState<string>("pending");
  const [reviewNotes, setReviewNotes] = useState("");
  const navigation = useNavigation();
  const actionData = useActionData() as { success?: boolean; error?: string };

  const isSubmitting = navigation.state === "submitting";

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Submissions for Challenge</DialogTitle>
        </DialogHeader>
        {submissions.length === 0 ? <p>No submissions yet.</p> : <div></div>}
        {selectedSubmission && (
          <div className="mt-4 space-y-4">
            <h3 className="text-lg font-semibold">Review Submission</h3>
            <Form method="post">
              <input type="hidden" name="intent" value="review-submission" />
              <input
                type="hidden"
                name="submissionId"
                value={selectedSubmission.id}
              />
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  name="status"
                  value={reviewStatus}
                  onValueChange={setReviewStatus}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="reviewed">Reviewed</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reviewNotes">Review Notes</Label>
                <Textarea
                  id="reviewNotes"
                  name="reviewNotes"
                  value={reviewNotes}
                  onChange={(e) => setReviewNotes(e.target.value)}
                  placeholder="Add review notes..."
                />
              </div>
              <div className="mt-4 flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSelectedSubmission(null)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Save Review"}
                </Button>
              </div>
            </Form>
          </div>
        )}
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
