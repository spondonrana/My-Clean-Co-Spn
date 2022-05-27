import { useState } from "react";

const useAdmin = () => {
  const [admin] = useState(true);

  return [admin];
};

export default useAdmin;
