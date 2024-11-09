import { SidebarNav } from "./components/sidebar-nav";
import { ProfileForm } from "./components/profile-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAuthorizedUser } from "@/app/actions/auth";

export default async function MePage() {
  let user = await getAuthorizedUser(cookies());
  if (!user) {
    return redirect("/login");
  }
  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
      <div className="col-span-3 grid items-start gap-6">
        <div>
          <Card>
            <CardHeader className="space-y-1 border-b">
              <CardTitle className="text-2xl">My Profile</CardTitle>
              <CardDescription>This is who I am.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 m-0 p-0">
              <div className="flex flex-col lg:flex-row lg:space-y-0 p-0 m-0">
                <aside className="lg:w-1/5 border-r p-4 m-0 h-fill">
                  <SidebarNav />
                </aside>
                <div className="flex-1 lg:max-w-2xl m-0 p-4">
                  <h3 className="text-lg font-medium pt-3 mb-4">Profile</h3>
                  <ProfileForm />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
