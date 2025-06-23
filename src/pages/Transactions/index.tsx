import { List } from "@/components/UI";
import { Page } from "@/components/UI/Page";
import { useUserTransactionQuery } from "@/hooks/useTransactions";
import { PageProps } from "@/types/Page.t";
import { GroupedTxType, TransactionTextMap, TransactionTypeMap } from "@/types/Trasaction.t";
import { groupBy } from "@/utils/groupBy";
import { format } from "date-fns";
import { useEffect, useState } from "react";

const Transactions: React.FC<PageProps> = ({ onClose }) => {
    
  const { data } = useUserTransactionQuery();
  const [groupedTx, setGroupedTx] = useState<GroupedTxType | null>(null);

  const toDateOnly = (ts: number | string) =>
    format(new Date(ts), "MMMM d, yyyy");

  useEffect(() => {
    if (data) {
      const dateWiseTransactions = groupBy(data!, "createdOnUtc", toDateOnly);
      console.log("", dateWiseTransactions)
      setGroupedTx(dateWiseTransactions);
    }

  }, [data]);

  return (
    <Page
      id="transactions-view"
      allowNavigatingBack={true}
      viewTitle="Transactions"
      allowSearch={false}
      backBtnClkHandler={onClose}
      Sheet={null}
      scrollable={false}
      className="!gap-6"
    >
      <div className="w-full h-full">
        <p className="text-[1em] text-light-brown font-josefin text-left">
          Check your latest transactions
        </p>
        <List className="space-y-1 w-full">
          <div className="flex flex-col items-start justify-start w-full mt-4 gap-3 ">
            <div className="flex flex-row items-center justify-between bg-[#BDE1E5] px-4 py-2 w-full rounded-xl sticky top-0">
              <p className="text-[1em] font-medium font-josefin">Amount</p>
              <p className="text-[1em] font-medium font-josefin">Date | Type</p>
            </div>
            <div className=" w-full">
              {groupedTx && Object.entries(groupedTx).length > 0 ? (
                Object.entries(groupedTx).map(([date, transactions]) => (
                  <div key={date} className="w-full">
                    <span className="block text-[1em] font-josefin font-semibold text-right text-light-brown">
                      {date}
                    </span>
                    <div className=" flex flex-col justify-start items-start gap-1">
                      {transactions.map((tx) => (
                        <div
                          key={tx.id}
                          className="flex flex-row items-center justify-between bg-[#ffffff] px-4 py-2 w-full rounded-xl"
                        >
                          <div>
                            <span className="text-[1em] font-josefin font-semibold">
                              {tx.type === "LeagueUpgrade" 
                                ? tx.amountInCurrency.toLocaleString()
                                : tx.type === "StashPurchase"  
                                ? tx.stashAmount.toLocaleString()
                                : tx.lootAmount.toLocaleString()}
                            </span>
                            <span className="font-josefin text-[1em] font-bold ml-2">
                              {TransactionTextMap[tx.type]}
                            </span>
                          </div>
                          <div>
                            <span
                              className={`text-[1em] font-medium font-josefin ${
                                tx.type === "LeagueUpgrade" || tx.type === "StashPurchase"
                                  ? "text-[#19A97B]"
                                  : "text-[#FF5757]"
                              }`}
                            >
                              {TransactionTypeMap[tx.type]}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-row items-center justify-between bg-[#ffffff] px-4 py-2 w-full rounded-xl">
                  <div>
                    <span className="text-[1em] font-josefin font-semibold">
                      No transactions...
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </List>
      </div>
    </Page>
  );
};

export default Transactions;
