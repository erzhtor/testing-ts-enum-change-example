import { FC } from "react";

export const SnapshotObject: FC<{ object: any }> = ({ object }) => (
    <>{JSON.stringify(Object.keys(object))}</>
);
