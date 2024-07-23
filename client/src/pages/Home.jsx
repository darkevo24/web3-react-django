import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

export default function Home() {
  const { user } = useAuth();
  const getUser = useUser();
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    getUser();
  }, [getUser]);

  useEffect(() => {
    if (user?.wallet_address) {
      setWalletAddress(user.wallet_address);
    }
  }, [user]);

  return (
    <div className="container mt-3">
      <h2>
        <div className="row">
          <div className="mb-12">
            {user?.email
              ? walletAddress
                ? `Your Ethereum wallet address: ${walletAddress}`
                : "Fetching wallet address..."
              : "Please login first"}
          </div>
        </div>
      </h2>
    </div>
  );
}
