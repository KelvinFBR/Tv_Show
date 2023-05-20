
const Title = ({ title }: { title: string }) => {
    return (
        <div className="relative max-w-max">
            <h3 className="font-medium text-2xl">{title}</h3>
            <span className="z-0 block w-[40%] h-1 bg-[#F66B0E] rounded-sm"></span>
        </div>
    )
}

export default Title