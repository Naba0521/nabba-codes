import { Card } from "@/components/Card";
import styles from "./page.module.css";

const data = [
  {
    title: "hi",
    desc: "1",
  },
  {
    title: "hi",
    desc: "2",
  },
  {
    title: "hi",
    desc: "3",
  },
  {
    title: "hi",
    desc: "4",
  },
  {
    title: "hi",
    desc: "5",
  },
  {
    title: "hi",
    desc: "6",
  },
]

export default function Home() {
  const arr = new Array(2).fill(0)
  return (
    <div className={styles.container}>
      <h1>Main Page </h1>
      {arr.map(haha => <Card />)}
      {data.map((item) => {
        return (
          <Card title={item.title} desc={item.desc} />
        )
      })}

    </div>
  );
}
