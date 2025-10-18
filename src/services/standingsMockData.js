// Helper: Get position badge color (for top 3)
export const getPositionColor = (position) => {
    if (position === 1)
        return "bg-gradient-to-r from-yellow-500/30 to-yellow-600/10 text-yellow-400 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.25)]";
    if (position === 2)
        return "bg-gradient-to-r from-gray-400/30 to-gray-500/10 text-gray-300 border-gray-400 shadow-[0_0_15px_rgba(156,163,175,0.2)]";
    if (position === 3)
        return "bg-gradient-to-r from-orange-500/30 to-orange-600/10 text-orange-400 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]";

    return "bg-neutral-900 text-slate-300 border-neutral-700 hover:bg-neutral-800/60 hover:shadow-[0_0_10px_rgba(239,68,68,0.15)] transition-all duration-300";
};

// Helper: Get Emoji according to position (for top 3)
export const getPodiumEmoji = (position) => {
    if (position === 1) return "🥇";
    if (position === 2) return "🥈";
    if (position === 3) return "🥉";
    return "";
};
