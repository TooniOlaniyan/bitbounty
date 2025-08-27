export function GlobalSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
      <div className="w-12 h-12 border-4 border-t-blue-500 border-blue-500/20 rounded-full animate-spin"></div>
    </div>
  );
}
