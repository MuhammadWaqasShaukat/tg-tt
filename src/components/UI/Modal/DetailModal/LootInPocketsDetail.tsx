import Divider from "../../Divider";

const LootInPocketsDetail = () => {
  return (
    <div className="text-left space-y-4">
      <ul className="list-disc px-4 ">
        <li>
          <span className="text-[1em] font-josefin  font-medium tracking-tighter text-light-brown">
            Your pockets can hold up to certain amount of LOOT tokens.
          </span>
        </li>
        <li>
          <span className="text-[1em] font-josefin font-medium tracking-tighter text-light-brown">
            The amount that you rob - goes into your pockets.
          </span>
        </li>
      </ul>
      <Divider />

      <div>
        <span className="text-[1em] font-josefin  font-medium tracking-tighter text-light-brown">
          If you get <span className=" font-bold">caught</span> you might lose
          some tokens based on this logic:
        </span>
      </div>
      <ul className="list-disc px-4">
        <li>
          <p className="text-[1em] font-josefin  font-medium tracking-tighter text-light-brown">
            <span className="font-bold"> Caught before 5th min:</span> -50% of
            the robbed amount.
          </p>
        </li>
        <li>
          <p className="text-[1em] font-josefin font-medium tracking-tighter text-light-brown">
            <span className="font-bold">Caught and you go to Jail:</span> you
            lose all tokens in your pockets
          </p>
        </li>
      </ul>
    </div>
  );
};

export default LootInPocketsDetail;
