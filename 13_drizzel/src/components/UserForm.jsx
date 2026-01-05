"use client";

import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { createUser, updateUser } from "../../actions/serverActions";
import { useBear } from "@/store/userStore";

const initialState = { success: false };

const UserForm = () => {
  const selectedUser = useBear((state) => state.selectedUser);
  const clearSelectedUser = useBear((state) => state.clearSelectedUser);

  const action = selectedUser
    ? updateUser.bind(null, selectedUser.id)
    : createUser;

  const [state, formAction] = React.useActionState(
    async (prevState, formData) => {
      return await action(formData);
    },
    initialState
  );


  useEffect(() => {
    if (state?.success && selectedUser) {
      clearSelectedUser();
    }
  }, [state?.success, selectedUser, clearSelectedUser]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {selectedUser ? "Update User" : "Add New User"}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form
          action={formAction}
          className="space-y-4"
          key={selectedUser?.id ?? "create"}
        >
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              required
              defaultValue={selectedUser?.name ?? ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              defaultValue={selectedUser?.email ?? ""}
            />
          </div>

          {selectedUser && (
            <div className="flex items-center gap-2">
              <Checkbox
                id="isActive"
                name="isActive"
                defaultChecked={selectedUser.isActive}
              />
              <Label htmlFor="isActive">Active</Label>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <Button type="submit" className="flex-1">
              {selectedUser ? "Update" : "Create"}
            </Button>

            {selectedUser && (
              <Button
                type="button"
                variant="secondary"
                onClick={clearSelectedUser}
              >
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserForm;
