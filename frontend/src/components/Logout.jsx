import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { set } from "react-hook-form";

function Logout() {
    const [authUser, setAuthUser] = useAuth();

    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("Users");
            toast.success("Logout successfully");
          
            setTimeout(() => {
                window.location.reload();
              }, 3000);
        } catch (err) {
            toast.error("Error: " + err.message);
            console.log(err);
            setTimeout(() => {}, 2000);
        }
    }; // Close the handleLogout function here

    return (
        <div>
            <button
                className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}

export default Logout;
