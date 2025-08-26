import { useState, useEffect } from "react";
import { Form, useNavigation, useActionData } from "react-router";
import {
  Plus,
  Calendar,
  FileText,
  Target,
  CheckCircle,
  AlertCircle,
  Tags,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import MultiSelect from "./MultiSelect";
import { Alert, AlertDescription } from "~/components/ui/alert";
import { techOptions } from "constants/index";

interface NewChallengeDialogProps {
  companyId: string;
}

interface ActionData {
  success?: boolean;
  error?: string;
  message?: string;
}

export default function NewChallengeDialog({
  companyId,
}: NewChallengeDialogProps) {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();
  const [techStack, setTechStack] = useState<string[]>([]);
  const actionData = useActionData() as ActionData;

  const isSubmitting =
    navigation.state === "submitting" &&
    navigation.formData?.get("intent") === "create-challenge";

  useEffect(() => {
    if (actionData?.success) {
      setOpen(false);
      // Reset form or show success toast
      console.log("Challenge created successfully!");
    }
  }, [actionData]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="button-primary">
          <Plus className="w-5 h-5 mr-2" />
          New Challenge
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Create New Challenge
          </DialogTitle>
          <DialogDescription>
            Create a new coding challenge for developers to solve. Fill out the
            details below.
          </DialogDescription>
        </DialogHeader>

        {/* Show error/success messages */}
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

        <Form method="post" className="space-y-6">
          <input type="hidden" name="intent" value="create-challenge" />
          <input type="hidden" name="companyId" value={companyId} />

          <div className="space-y-2">
            <Label htmlFor="title" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Challenge Title *
            </Label>
            <Input
              id="title"
              name="title"
              placeholder="e.g., Build a DeFi Portfolio Tracker"
              required
              className="w-full"
              disabled={isSubmitting}
            />
          </div>

          {/* Challenge Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Challenge Description *</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe what developers need to build, requirements, and expectations..."
              rows={4}
              required
              className="w-full resize-none"
              disabled={isSubmitting}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Difficulty Level */}
            <div className="space-y-2">
              <Label htmlFor="difficulty">Difficulty Level *</Label>
              <Select name="difficulty" required disabled={isSubmitting}>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="techStack" className="flex items-center gap-2">
                <Tags className="w-4 h-4" />
                Technologies/Tags *
              </Label>
              <MultiSelect
                options={techOptions}
                name="techStack"
                placeholder="Select technologies"
                required
                disabled={isSubmitting}
                value={techStack}
                onChange={setTechStack}
                error={
                  actionData?.error && techStack.length === 0
                    ? "At least one technology is required"
                    : undefined
                }
              />
            </div>

            {/* Technology Stack */}
            {/* <div className="space-y-2">
              <Label htmlFor="techStack">Primary Technology *</Label>
              <Select name="techStack" required disabled={isSubmitting}>
                <SelectTrigger>
                  <SelectValue placeholder="Select technology" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="nodejs">Node.js</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="solidity">Solidity</SelectItem>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                  <SelectItem value="vue">Vue.js</SelectItem>
                  <SelectItem value="angular">Angular</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Due Date */}
            <div className="space-y-2">
              <Label htmlFor="dueDate" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Due Date *
              </Label>
              <Input
                id="dueDate"
                name="dueDate"
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                className="w-full"
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Requirements */}
          <div className="space-y-2">
            <Label htmlFor="requirements">Technical Requirements</Label>
            <Textarea
              id="requirements"
              name="requirements"
              placeholder="List specific technical requirements, API integrations, features to implement..."
              rows={3}
              className="w-full resize-none"
              disabled={isSubmitting}
            />
          </div>

          {/* Submission Guidelines */}
          <div className="space-y-2">
            <Label htmlFor="submissionGuidelines">Submission Guidelines</Label>
            <Textarea
              id="submissionGuidelines"
              name="submissionGuidelines"
              placeholder="How should developers submit their work? GitHub repo, live demo, documentation requirements..."
              rows={3}
              className="w-full resize-none"
              disabled={isSubmitting}
            />
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="button-primary"
              disabled={isSubmitting}
            >
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
        </Form>
      </DialogContent>
    </Dialog>
  );
}
