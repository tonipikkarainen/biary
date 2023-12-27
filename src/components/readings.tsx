import React, { useEffect, useState } from "react";
import { ReadingType } from "types";
import {
  collection,
  query,
  where,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "firebaseconfig";

export const Readings = () => {
  const [readings, setReadings] = useState<ReadingType[]>([]);
  const [user, loading] = useAuthState(auth);
  const readingsQuery = query(
    collection(db, "readings"),
    where("ownerId", "==", auth?.currentUser?.uid),
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(readingsQuery, (snap) => {
      const data: ReadingType[] = snap.docs.map((doc) => {
        const docData = doc.data() as {
          bookname: string;
          writer: string;
          currentlyReading: boolean;
          started: Timestamp;
          ended?: Timestamp | null;
        };
        return {
          bookname: docData.bookname,
          writer: docData.writer,
          id: doc.id,
          currentlyReading: docData.currentlyReading,
          started: docData.started.toDate(),
          ended: docData.ended?.toDate() ?? null,
        };
      });
      console.log(data);
      setReadings(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {readings.map((book) => {
        return <div key={book.id}>{book.bookname}</div>;
      })}
    </div>
  );
};
