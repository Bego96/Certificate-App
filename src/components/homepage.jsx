const Homepage = (props) => {
    return (
        <>
            
            <div className={`laptop:absolute laptop:top-16 p-10 ${props.showSidebar ? ' laptop:left-[30%] desktop:left-[20%]' : ' laptop:left-0'}`}>
                Start
            </div>
        </>
    )
}

export default Homepage;