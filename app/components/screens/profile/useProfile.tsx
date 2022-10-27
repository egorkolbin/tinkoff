import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";
import { db } from "../../../firebase";
import { useAuth } from "../../../hooks/useAuth";

interface IProfile {
  _id: string;
  displayName: string;
  docId: string;
}

export const useProfile = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<IProfile>({} as IProfile);
  const [name, setName] = useState("");

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "users"), where("_id", "==", user?.uid), limit(1)),
        (snapshot) => {
          const profile = snapshot.docs.map((d) => ({
            ...(d.data() as Omit<IProfile, "docId">),
            docId: d.id,
          }))[0];
          setProfile(profile);
          setName(profile.displayName);
          setIsLoading(false);
        }
      ),
    []
  );
  const value = useMemo(
    () => ({
      profile,
      isLoading,
      name,
      setName,
    }),
    []
  );
  return value;
};
