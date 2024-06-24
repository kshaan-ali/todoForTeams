import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Appbar } from "./components/app";

export default function Home() {
  return (
    <div>
      <Appbar></Appbar>
    </div>
  );
}
