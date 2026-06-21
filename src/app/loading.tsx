export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#0b0f19] flex items-center justify-center z-[9999]">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
        <p className="font-display text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Loading...
        </p>
      </div>
    </div>
  );
}
