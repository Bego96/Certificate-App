const Homepage = (props) => {
    return (
        <>
            <div className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] h-[64px] bg-slate-200">

            </div>
            <div className={`laptop:absolute laptop:top-16 p-10 ${props.showSidebar ? ' laptop:left-[30%] desktop:left-[20%]' : ' laptop:left-0'}`}>
                <button type="button" onClick={() => props.toggleSidebar()}>Toggle sidebar</button>
            </div>
        </>
    )
}

export default Homepage;