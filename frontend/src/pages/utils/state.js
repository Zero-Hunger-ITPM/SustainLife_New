import { createGlobalState } from "react-hooks-global-state";

const initialState = { packageid: null };
const { useGlobalState } = createGlobalState(initialState);

export { useGlobalState };
