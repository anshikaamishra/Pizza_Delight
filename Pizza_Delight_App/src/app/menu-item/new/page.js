'use client'

import {useProfile} from "@/components/UseProfile";
import { useState } from "react";
import toast from "react-hot-toast";
import EditableImage from "@/components/layout/EditableImage";
import Link from "next/link";
import UserTabs from "@/components/layout/UserTabs";
import Left from "@/components/icons/Left";
import {redirect} from "next/navigation";
import MenuItemsForm from "@/components/layout/MenuItemsForm";

export default function NewMenuItemsPage() {
   
    const [redirectToItems, setRedirectToItems] = useState(false);
    const {loading, data} = useProfile();

     async function handleFormSubmit(ev, data) {
        ev.preventDefault();
        const savingPromise = new Promise(async (resolve, reject) => {

            const response = await fetch('/api/menu-item', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {'Content-Type':'application/json'},
        });

        if (response.ok)
            resolve();
        else
            reject();
        });

        await toast.promise(savingPromise, {
            loading: 'Saving this tasty item',
            success: 'Saved',
            error: 'Error',
        });

        setRedirectToItems(true);
     }
    
    if (redirectToItems) {
        return redirect('/menu-item');
    }

    if(loading) {
        return 'Loading pizza info...';
    }

    if(!data.admin) {
        return 'Not an admin.';
    }

    return (
        <section className="mt-8">
            <UserTabs isAdmin={true} />
            <div className="max-w-md mx-auto mt-8"> 
                <Link href={'/menu-item'} className="button">
                <Left/>
                <span>Show all menu items</span>
                </Link>
            </div>
            <MenuItemsForm menuItem={null} onSubmit={handleFormSubmit}></MenuItemsForm>
        </section>
    );
}