import { UseMutateAsyncFunction } from "@tanstack/react-query";

export async function purchaseItemHelper(
  count: number,
  purchaseItem: UseMutateAsyncFunction<any, any, any, any>
) {
  for (let i = 0; i < count; i++) {
    await purchaseItem(undefined);
  }
}
