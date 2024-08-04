"use client";
import styles from "./page.module.css";
import Card from "./components/card/Card";
import Container from "./components/container/Container";
import { useState } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Card />
      <Container />
    </main>
  );
}
