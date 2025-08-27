import AuditLogCard from "components/AuditLogCard";
import type { ClientLoaderFunctionArgs } from "react-router";
import { fetchAllSubmissions } from "~/firebase/challenges";
import type { Route } from "./+types/audit-log";

export async function clientLoader({ request }: ClientLoaderFunctionArgs) {
  try {
    const submissionaudits = await fetchAllSubmissions();
    return {
      submissionaudits,
    };
  } catch (error) {
    if (error instanceof Response) {
      throw error;
    }
  }
}

export default function AuditLogPage({ loaderData }: Route.ComponentProps) {
  const { submissionaudits } = loaderData;
  return (
    <div className="w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Audit Log</h1>
        <p className="text-sm text-muted-foreground/50  max-w-2xl mx-auto">
          Public feed of all platform activities with cryptographic
          verification.
        </p>
      </div>

      <div className="space-y-6">
        {submissionaudits &&
          submissionaudits.length > 0 &&
          submissionaudits.map((entry) => (
            <AuditLogCard key={entry.id} entry={entry} />
          ))}
      </div>
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 text-gray-600">
          <span className="text-lg font-medium">
            {submissionaudits.length} events
          </span>
        </div>
      </div>
    </div>
  );
}
