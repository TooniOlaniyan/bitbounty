import { Button } from "~/components/ui/button";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { Form, useActionData, useNavigation } from "react-router";
import { Label } from "~/components/ui/label";
import { Alert, AlertDescription } from "~/components/ui/alert";

interface ReviewCardProps {
  submissionId: string;
  username: string;
  submissionLink: string;
  status: "pending" | "approved" | "rejected";
  liveLink: string;
  shaHash: string;
  submissionTime: string;
}
interface ActionData {
  success?: boolean;
  error?: string;
  message?: string;
}

export function ReviewCard({
  submissionId,
  username,
  submissionLink,
  status,
  shaHash,
  liveLink,
  submissionTime,
}: ReviewCardProps) {
  const isDisabled = status !== "pending";
  const actionData = useActionData() as ActionData;
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "submitting" &&
    navigation.formData?.get("intent") === "update-submission-status";

  return (
    <div className="border border-grey-500 rounded-xl p-4 mb-4 hover:shadow-md transition-all duration-300">
      {actionData?.success && (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            {actionData.message || "Challenge created successfully!"}
          </AlertDescription>
        </Alert>
      )}
      {actionData?.error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{actionData.error}</AlertDescription>
        </Alert>
      )}
      <div className="flex  flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-foreground">
              {username}'s Submission
            </h4>
            <p className="text-xs text-muted-foreground/50">{submissionTime}</p>
          </div>
          <p className="text-sm text-muted-foreground mt-1">Status: {status}</p>
        </div>
        <div>
          <div>
            <Label className="text-sm font-semibold text-foreground">
              GitHub Repository
            </Label>
            <a
              href={submissionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary underline"
            >
              {submissionLink}
            </a>
          </div>
          <div>
            <Label className="text-sm font-semibold text-foreground">
              SHA-256 Hash
            </Label>
            <a
              href={submissionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary underline"
            >
              {shaHash}
            </a>
          </div>
          <div>
            <Label className="text-sm font-semibold text-foreground">
              Live Link
            </Label>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary underline"
            >
              {liveLink}
            </a>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <Form method="post">
            <input
              type="hidden"
              name="intent"
              value="update-submission-status"
            />
            <input type="hidden" name="submissionId" value={submissionId} />
            <input type="hidden" name="newStatus" value="approved" />
            <Button
              type="submit"
              variant="outline"
              size="sm"
              disabled={isDisabled || isSubmitting}
              className={`bg-green-100 ${isDisabled && "bg-green-50"} text-green-600 hover:bg-green-200`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Approving...
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4 mr-1" /> Approve
                </>
              )}
            </Button>
          </Form>
          <Form method="post">
            <input
              type="hidden"
              name="intent"
              value="update-submission-status"
            />
            <input type="hidden" name="submissionId" value={submissionId} />
            <input type="hidden" name="newStatus" value="rejected" />
            <Button
              type="submit"
              variant="outline"
              size="sm"
              disabled={isDisabled || isSubmitting}
              className={`bg-red-100 text-red-600 ${isDisabled && 'bg-green-50'} hover:bg-red-200`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Rejecting...
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 mr-1" /> Reject
                </>
              )}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
