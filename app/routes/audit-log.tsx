import AuditLogCard from "components/AuditLogCard";
import { auditLogData } from "constants/index";

// Sample audit log data - you can move this to constants later

export default function AuditLogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Audit Log</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Public feed of all platform activities with cryptographic
          verification.
        </p>
      </div>

      {/* Event Counter */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 text-gray-600">
          <span className="text-lg font-medium">
            {auditLogData.length} events
          </span>
        </div>
      </div>

      {/* Audit Log Entries */}
      <div className="space-y-6">
        {auditLogData.map((entry) => (
          <AuditLogCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
