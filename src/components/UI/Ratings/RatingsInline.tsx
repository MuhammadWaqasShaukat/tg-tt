
const RatingsInline = ({ className }: { className?: string }) => {
    return (
        <div className={`flex flex-row justify-start items-center px-2 py-0.5 rounded-lg ${className}`}>
            <h3 className="text-base ">Pickpocket</h3>
            <div className="grid grid-cols-3 gap-1 ">
                <div className="w-5 h-5 bg bg-icon-star-filled"></div>
                <div className="w-5 h-5 bg bg-icon-star-filled"></div>
                <div className="w-5 h-5 bg bg-icon-star"></div>
            </div>
        </div>
    )
}

export default RatingsInline