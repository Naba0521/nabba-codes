import styles from "./Card.module.css"
export const Card = (props) => {
    return (
        <div className="w-[80%] m-auto flex flex-col bg-amber-200 h-[200px] rounded-[20px] border-[5px] border-red-300">
            <h1 className="text-4xl text-white">{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
}