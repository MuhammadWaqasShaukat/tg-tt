import { LocalizationType } from "@/types/localization.t";

export const localizationEng: LocalizationType = {
  "robber_screen.limit_info":
    "You must first reach %1$@ LOOT to empty your pocket.",
  "robber_screen.capacity": "Pocket Capacity %1$@/%2$@",
  "robber_screen.empty_pockets": "Deposit in Vault",
  "robber_screen.consumables": "Consumables",
  "robber_screen.consumables_description":
    "These precious items can help you during your journey!",
  "robber_screen.use_consumables": "Use!",
  "robbers_screen.title": "Thieves",
  "robbery_screen.title": "You are robbing %1$@!",
  "robbery_screen.info_tip_extraction_max":
    "This is the Maximum amount that you can steal from your opponent. It is based on your League and Tier, along with how much does the victim has in his Vault. Higher Leagues and Tiers allow you to steal more!",
  "robbery_screen.info_tip_league_penalty":
    "If you try to rob someone with lower League than you - this will result in lowering the extraction rate as well. To rob at max rate - you can look for someone with your league or higher! For every league below yours - you will loose 20% of your Maximum Extraction rate.",
  "robbery_screen.info_tip_huge_bag_boost":
    "Once you enable a Huge bag item - the amount that you steal is boosted with 50%!",
  "robbery_screen.stolen": "You stole %1$@ out of %2$@ maximum LOOT so far",
  "robbery_screen.time_left": "%1$@ time left until the end of the robbery",
  "robbery_screen.recall": "Run away!",
  "shop_screen.title": "Thief Shop",
  "shop_screen.info":
    "Get the most out of your robbing adventures by using special tools and boosts!",
  "shop_screen.table_tool_column": "Tool",
  "shop_screen.table_havel_column": "You Have",
  "shop_screen.table_buy_column": "Buy Now!",
  "shop_screen.item_temporaryGuards": "Guard Dog",
  "shop_screen.item_reinforcedVault": "Reinforced Vault",
  "shop_screen.item_temporaryAlarmSystem": "Improved Alarm",
  "shop_screen.item_decoy": "Decoy",
  "shop_screen.item_fakeIdentity": "Fake Identity",
  "shop_screen.item_snack": "Snack",
  "achievements_screen.title": "Achievements",
  "achievements_screen.table_type_column": "Achievement",
  "achievements_screen.table_leaderboard_column": "Leaderboard",
  "achievements_screen.type_sneaky": "Sneaky",
  "achievements_screen.type_cautious": "Cautious",
  "achievements_screen.type_sloppy": "Sloppy",
  "achievements_screen.type_sleepy": "Sleepy",
  "achievements_screen.type_vigilant": "Vigilant",
  "achievements_screen.type_wanted": "Wanted",
  "achievements_screen.type_rich": "Rich",
  "achievements_screen.type_crafty": "Crafty",
  "achievements_screen.type_sneaky_description": "Complete %1$@ robberies.",
  "achievements_screen.type_cautious_description": "Stop %1$@ robberies.",
  "achievements_screen.type_sloppy_description": "Get caught %1$@ times.",
  "achievements_screen.type_sleepy_description":
    "Accumulate %1$@ hours of safe time by deploying guards.",
  "achievements_screen.type_vigilant_description":
    "Send %1$@ other thieves to prison.",
  "achievements_screen.type_wanted_description":
    "Get on the hitlist of %1$@ other thieves.",
  "achievements_screen.type_rich_description": "Steal a total of %1$@ LOOT.",
  "achievements_screen.type_crafty_description":
    "Complete a total of %1$@ robberies without getting caught.",
  "achievements_screen.info_tip":
    "Everytime you Achieve a goal - you will be rewarded with Stash. Monitor closely your achievements and your tasks!",
  "achievements_screen.notif_achievement_completed_title":
    "Achievement completed: %1$@",
  "alarm_screen.title": "Alarm",
  "alarm_screen.info": "This is your Alarm system.",
  "alarm_screen.info_1":
    "The alarm is always active and sends you notification on the 5th minute when someone breaks in.",
  "alarm_screen.info_2":
    "You can always improve your alarm which will trigger notification on the 1st minute.",
  "alarm_screen.info_sticky_footer_heading":
    "One Improved alarm is\nactive 2 hours.",
  "alarm_screen.info_sticky_footer_sub_heading":
    "You can stack as many alarms as you want.",
  "alarm_screen.get_alarm_button": "Get Alarm",
  "alarm_screen.get_alarm_balance": "Balance: %1$@",
  "alarm_screen.reinforce_button": "Improve Alarm",
  "alarm_screen.home_button": "Go Home",
  "backend.generic_error": "Something went wrong. Please try again.",
  "backend_robbery.err_recall_too_early":
    "You can't stop your robbery in the first %1$@ minutes!",
  "backend_robbery.err_cant_rob_yourself": "You can't rob yourself!",
  "backend_robbery.err_you_are_in_prison": "Time left in prison: %1$@",
  "backend_robbery.err_already_doing_robbery": "You're already robbing somone!",
  "backend_robbery.err_my_guard_active":
    "You can't rob while your Guard Dog is active!",
  "backend_robbery.err_victim_guard_active":
    "%1$@ has an active guard. You can't execute a robbery now!",
  "backend_robbery.err_not_enough_stamina":
    "You don't have enough stamina to rob someone. Go and buy Stamina or wait till it regenrates!",
  "backend_robbery.err_rob_pockets_full":
    "You can't start a robbery because your pockets are full! You need to empty them first.",
  "backend_robbery.err_cant_rob_inactive_user":
    "You can't rob an inactive user!",
  "backend_robbery.notif_caught_robber_title": "%1$@ caught you!",
  "backend_robbery.notif_caught_robber_desc":
    "You have been caught. Check what happened.",
  "backend_robbery.notif_victim_rob_alarm_title": "Alarm activated!",
  "backend_robbery.notif_victim_rob_alarm_desc":
    "Quick! Sneaky %1$@ is robbing you. Go home and catch him!",
  "backend_robbery.notif_attacker_robbery_end_title": "Successful Robbery!",
  "backend_robbery.notif_attacker_robbery_end_desc":
    "Great! You did it! You robbed %1$@.",
  "backend_thief.err_cant_deposit":
    "In order to deposit LOOT your pockets need to be full!",
  "backend_thief.err_register_duplicate_user_or_id":
    "Duplicate username or phone ID.",
  "backend_tokens.err_no_tokens_to_claim": "You don't have any Stash to claim.",
  "backend_tokens.notif_tokens_to_claim_title": "Claim your Stash!",
  "backend_tokens.notif_tokens_to_claim_desc":
    "You have available Stash in your Vault. Claim it now!",
  "backend_tokens.err_not_enough_tokens":
    "Not enough Stash to purchase this item! You can buy Stash!",
  "backend_tool.err_ammount_low":
    "You don't have enough of '%1$@'(%2$@ available).",
  "backend_tool.err_tool_not_active": "Tool isn't available at the moment.",
  "backend_tool.err_tool_not_found": "Tool not found!",
  "backend_tool.err_too_many_dogs":
    "You can have only 12h of safe time a day. If you used your free daily Guard Dog - now you can use only 3 more Guard Dog items.",
  "backend_tool.err_tool_not_provided": "No tool selected for use!",
  "backend_tool.err_max_use_amount": "You can't use more than %1$@ %2$@.",
  "backend_tool.err_tool_use_from": "%1$@ can't be used here!",
  "backend_tool.err_no_victim_to_spy": "Please provide a target to spy on!",
  "backend_tool.err_tool_already_active": "%1$@ is already active!",
  "backend_tool.err_max_use_amount_daily":
    "Maximum daily use of '%1$@' reached. Limit: %2$@",
  "backend_tool.err_free_guard_used": "You already used your FREE daily guard!",
  "backend_tool.err_cant_activate_guard_when_robbing":
    "You can't activate your Guard Dog when robbing.",
  "backend_tool.notif_tool_end_title": "Your %1$@ has expired!",
  "backend_tool.notif_tool_end_desc":
    "You home's protection is low. Go home and update it!",
  "catch_thief.improved_achievement_title": "Improved achievements",
  "catch_thief.catch_after_five":
    "You caught %1$@ while robbing you. You have lost",
  "catch_thief.catch_until_five":
    "You caught %1$@ while robbing you. To reward your bravery you receive 50% of the $LOOT he stole from you:",
  "catch_thief.catch_prison":
    "You caught %1$@ while robbing you. To reward your bravery you receive all the $LOOT he was caring in his pockets:",
  "catch_thief.catch_prison_no_pockets":
    "Well done! You sensed something fishy and stopped %1$@ from robbing you! You managed to protect everything you had in your Vault!",
  "catch_thief_screen.title": "You caught the thief!",
  "catch_thief_screen.info":
    "Well done! You sensed something fishy and stopped %1$@ from robbing you!",
  "catch_thief_screen.stolen":
    "During the escape %1$@ dropped part of their LOOT! %1$@ LOOT is yours now!",
  "catch_thief_screen.go_home_button": "Check Your Home",
  "catch_thief_screen.invite_friends_button": "Invite your friends & Earn",
  "caught_screen.title": "You've Been caught",
  "caught_screen.info":
    "You have been caught by %1$@! Getting caught prior the first 5 minutes of the robbery, results in losing some amount from your robbery.",
  "caught_screen.lost": "You have lost:%1$@",
  "caught_screen.info_tip_lost":
    "When getting caught before 5th minute - you loose 50% from the stolen LOOT!\nIf caught and you end up in jail - you loose all LOOT from your pockets also!",
  "caught_screen.suspicion": "Your suspicion points increased to %1$@.",
  "caught_screen.percentage_prison":
    "Currently there is %1$@ % chance that the police will catch you.",
  "consumable_screen.title": "Select Tools",
  "consumable_screen.description": "to boost your robbery!",
  "consumable_screen.button": "Rob Now!",
  "consumable_screen.effects": "Bonuses:",
  "example_pack.example_key":
    "English translation goes here. Placeholder example: User has %1$@ tokens!",
  "ftux_screen.title_label": "Welcome to Pocket Thieves!",
  "ftux_screen.game_description_label":
    "A game where your trickery and cunning are generously rewarded!\\nItâ\u0080\u0099s time to show everyone(including your friends) who the best thief is!\\n\\n\\nBut, you knowâ\u0080¦ in order to do so, you need to initiate a robbery first. Check how itâ\u0080\u0099s done!",
  "ftux_screen.ftux_rob_now_description_label":
    "This is the button you need to tap from your home screen and riches will end up in your pockets!",
  "ftux_screen.robbers_list_description_label":
    "After that, a list of targets will appear.\\nAt first, focus on getting some shinies!",
  "guards_screen.title": "Guard Dog",
  "guards_screen.tool_name": "Guard Dog",
  "guards_screen.info": "This is your faithful Guard Dog.",
  "guards_screen.info_1":
    "The Guard Dogs prevents anyone from robbing you for the time they are active.",
  "guards_screen.info_2": "Each Guard gives you 2 hours safe time.",
  "guards_screen.info_3":
    "By default you receive one daily Guard dog which is active 6 hours.",
  "guards_screen.info_4": "You can stack Guard dogs up to 12h/daily",
  "guards_screen.info_tip_heading": "Achievement booster",
  "guards_screen.action": "Set your Guard Dog.",
  ".item_guard_footer_heading":
    "Guard Dogs from Shop can defend you for 2 hour each and can be stacked.",
  "guards_screen.button": "Activate",
  "guards_screen.free_guard_footer_heading":
    "One daily Guard Dog is\nactive 6 hours.",
  "guards_screen.free_guard_button": "Activate Free Guard",
  "guards_screen.cancel_guards": "Cancel Guard Dog",
  "guards_screen.get_guard_dog_button": "Get Guard Dog",
  "guards_screen.get_guard_dog_balance": "Balance: %1$@",
  "history_screen.title": "History",
  "history_screen.tab_robbed": "You Robbed",
  "history_screen.tab_been_robbed": "Been Robbed by",
  "history_screen.table_player_column": "Player",
  "history_screen.table_stolen_column": "Stolen",
  "history_screen.table_rob_column": "Rob",
  "history_screen.table_revenge_column": "Revenge!",
  "home_screen.rob_button": "Rob Now!",
  "home_screen.robbery_alert": "You're being ROBBED!",
  "home_screen.stalk_list": "Stalk list",
  "home_screen.history_list": "History",
  "home_screen.thief_shop": "Thief Shop",
  "home_screen.safe_title": "Safe Time Activated!",
  "home_screen.safe_info":
    "You can go rest! Your Guard Dogs will protect your Vault! If you wish, you can deactivate safe time before the remaining time.",
  "home_screen.safe_time": "Time left:",
  "home_screen.safe_button": "Deactivate",
  "home_screen.jail_time_left": "In jail until:",
  "home_screen.see_more": "Check Progress",
  "home_screen.end_of_robbery_label": "Time until the end of the robbery.",
  "item_description.temporaryGuards":
    "The Guard Dog prevents anyone from robbing you for the time they are active.\nEach Guard gives you %1$@ hours safe time.\nYou can stack up to 6 Guard dogs per day!",
  "item_description.reinforcedVault":
    "The Reinforced Vault is providing you with extra layer of protection when someone starts robbing you. It decreases the amount of $LOOT that other thieves extract from you by %1$@%%. \nEnable in the Vault menu.",
  "item_description.temporaryAlarmSystem":
    "Sends you a notification after %1$@ minutes after someone starts robbing you. Used from the Alarm menu. Will be blocked by thief using decoy.",
  "item_description.decoy":
    "Blocks all alarm systems for additional %1$@ minutes when you rob someone. Overriden by reinforced alarm systems.\nThis will give you at least %1$@ minutes until they get the notification for the robbery.",
  "item_description.fakeIdentity":
    "Fake ID decreases %1$@ points from your total Suspicion points. Used from the Thiefâ\u0080\u0099s menu.",
  "item_description.snack":
    "Restores %1$@ Stamina. \nSo when you run low on Stamina, instead of waiting for it to regenerate - you can grab a Snack. \nCan be used from the Thiefâ\u0080\u0099s menu.",
  "item_description.crowbar":
    "Increases the rate of LOOT extraction by %1$@%% of max robery capacity per minute. Can be applied before initiating a robbery.\nCrowbar gives you faster robbing time with %1$@%%. Instead of executing a full robbery in 20 min, with this item - the hit will take you only 13 min!",
  "item_description.deepPockets":
    "Increases your LOOT storing carrying capacity until the next deposit in the Vault by %1$@%%.\nAlso boosts your Thief to steal %1$@%% $LOOT more during robberies. \nActivated Huge Bag expires with the next deposit in your Vault. Enable from Thief page.",
  "item_description.binocles":
    "Shows an approximate amount of LOOT your target has in their Vault. Can be used in the robbery selection menu.",
  "item_description.buy_button": "Buy",
  "item_use.guards":
    "Your loyal Guard Dog will protect your Vault for %1$@ hours in your absence.",
  "item_use.vault":
    "Next time a thief tries to rob you, they will get %1$@%% less LOOT from your Vault.",
  "item_use.alarm":
    "Next time a thief tries to rob you, you will receive notification on the first minute after the start of the robbery.",
  "item_use.identity":
    "By using a fake identity you were able to reduce your suspicion level by %1$@ point.",
  "item_use.snack": "By eating a delicious snack, you recover %1$@ Stamina.",
  "pop_up.tool_error": "You don't have enough %1$@. Go to the Thief Shop?",
  "prison_screen.title": "Jailtime!",
  "prison_screen.info":
    "You've been caught by the police too many times during your last robberies and you're in prison now.",
  "prison_screen.time_left": "%1$@ time left untill you get out.",
  "prison_screen.button": "Go to Home.",
  "prison_screen.cant_rob":
    "You're imprisoned and you can't make a new robbery!",
  "recall_screen.title": "You ran away!",
  "recall_screen.info":
    "You felt a trap and stopped robbing %1$@ and ran away.",
  "recall_screen.recall_screen":
    "You stole %1$@ out of %2$@ maximum amount for your League and Tier.",
  "recall_screen.go_home_button": "Go Home!",
  "shop_screen.item_crowbar": "Crowbar",
  "robber_result.successful_robbery": "You did it! You robbed %1$@!",
  "robber_result.ran_away": "You ran away from robbing %1$@.",
  "robber_result.caught": "You caught %1$@ while robbing you. You have lost:",
  "robber_result.caught_after_five":
    "%1$@ got home and prevented your robbery. Thanks to your swift reactions, you managed to escape with the bounty that you stole untill this point.",
  "robber_result.caught_untill_five":
    "%1$@ got home unexpectedly. During your escape you dropped half of the bounty, that you managed to steal from them so far.",
  "robber_result.caught_prison":
    "%1$@ got home and alerted the police. You tried to escape, but fell over a fence and dropped everything you managed to steal from them so far including everything that you had in your pockets. You are being sent to prison!",
  "robber_result.caught_prison_no_pockets":
    "%1$@ got home and alerted the police. You tried to escape, but fell over a fence and dropped everything you managed to steal from them so far. You are being sent to prison!",
  "robber_screen.title": "Thief",
  "robber_screen.info": "Current amount in your pocket",
  "robber_screen.description":
    "This is your Thief! What a handsome and slick fellow, right? He can hold limited amount of LOOT after robberies and needs to deposit it into the Vault when his pockets get full.",
  "shop_screen.item_deepPockets": "Huge Bag",
  "shop_screen.item_binoculars": "Binoculars",
  "stalk_screen.title": "Stalk List",
  "stalk_screen.info":
    "Here you can check your stalked targets. Add targets to your stalk list for easier access to potential robberies.",
  "stalk_screen.table_player_column": "Thief Name",
  "stalk_screen.table_remove_column": "Remove",
  "stalk_screen.table_rob_column": "Rob!",
  "stalk_screen.active_label": "Active",
  "stalk_screen.inactive_label": "Inactive",
  "stalk_screen.empty":
    'Your stalk list is empty. Go and make some new "friends"!',
  "success_screen.title": "Successful Robbery!",
  "success_screen.info": "Great! You did it! You robbed %1$@.",
  "success_screen.stolen": "were stolen, out of %1$@ $LOOT.",
  "success_screen.go_home_button": "Go Home!",
  "tutorial_screen.welcome": "Welcome to Token Thieves!",
  "tutorial_screen.intro_one":
    "A game where your trickery and your cunning are generously rewarded! It's time to show everyone(including your friends) who the best thief is!",
  "tutorial_screen.intro_two":
    "But, you know... in order to do so, you need to initiate a robbery first. Check how it's done!",
  "tutorial_screen.rob":
    "The most important button in the game! From here you target your victim and you initiate a robbery!",
  "tutorial_screen.target":
    "Once you see the list with other thieves in the game - you can cherrypick someone to rob!",
  "tutorial_screen.tools":
    "Once you have targeted a victim, you can boost your robbery with some tools for improved performance.\n\nNow Let's get started!",
  "tutorial_screen.end_one": "Good job!",
  "tutorial_screen.end_two": "You succesfully robbed %1$@!",
  "tutorial_screen.notifications_one":
    "- Remember, other thieves are after your LOOT, just like you are after theirs!",
  "tutorial_screen.notifications_two":
    "- It is important to monitor for push notifications from the game, so you are able to catch them all and protect your stolen treasures!",
  "tutorial_screen.notifications_three":
    "- Now let's see how to Deposit the stolen LOOT in your Vault so that you can steal more!",
  "tutorial_screen.button": "Invite friends & Earn",
  "tutorial_screen.next_button": "Next",
  "vault_screen.title": "Vault",
  "vault_screen.info":
    "The Vault is holding all $LOOT that you manage to rob from other thieves.",
  "vault_screen.info_tip_vault_reinforcement":
    "You can enable the Vault reinforcement, which will decrease the stealing capacity of someone attacking you by 35%! Can be deactivated if attcker uses Decoy.",
  "vault_screen.info_tip_league_needed":
    "In order to start withdrawing your stolen LOOT - you will need to reach a certain League. You can do that either naturally by filling up your Vault, or by skipping some gameplay and paying for the Premium Leagues.",
  "vault_screen.button": "Use Now",
  "vault_screen.current_amount": "Vault capacity %1$@/%2$@",
  "vault_screen.tokens_info":
    "Your Vault is %1$@%% full and gives\n%1$@ $STASH / Hour",
  "vault_screen.claim_tokens": "Claim Stash",
  "vault_screen.tokens_amount": "You have %1$@ Stash.",
  "thief_shop.info_tip_home_items":
    "Those special tools will assist you with safeguarding your most valuable assets! Can be enabled through visiting your Vault page.",
  "thief_shop.info_tip_thief_items":
    "The tools here can boost your robbery skills and master your thief attacks. Use wisely as they hurt others ;) Enable prior a robbery!",
  "thief_shop.info_tip_productivity_items":
    "These items are priceless when it comes to maintaining your healthy thief. Like the vegans chew their cucumbers - here you can gain bobbery stamina and safe card for out of jail!",
  "achievements_lb.info_tip_lb_prizepool":
    "Ocasionally - TokenThieves opens a Prize pool and only the master thieves will get a cut from the pie. Time is limited and prizes are juicy!",
  "vault_screen.info_tip_max_amount_vault":
    "This is the Maximum that your vault can hold. Progress through the game and be able to fit more and more in your Vault!",
  "achievements_global.info_tip_sleepy":
    "You get points everytime you enable your guard dogs for the sake of sleep.. or whatever :)",
  "achievements_global.info_tip_wanted":
    "Everytme someone adds you to his Stalk list - means now you are oficially Wanted and can be targeted at any time! Get points when someone Stalks you.",
  "achievements_global.info_tip_sloppy":
    "Even getting busted while doing a robbery - can be good. You earn a point everytime someone catches you during robbery.",
  "achievements_global.info_tip_crafty": "Get points by using tools.",
  "achievements_global.info_tip_sneaky":
    "When you successfully execute a robbery - a point is being rewarded. The more you get - the better. Trust the thief!",
  "achievements_global.info_tip_vigilant":
    "Once you catch a fellow thief during a robbery and send him to jail - you get rewarded with a vigilant point.",
  "achievements_global.info_tip_cautious":
    "Make sure you cut all robberies and for every caught thief - you get a point!",
  "achievements_global.info_tip_rich":
    'It\'s all about the "Benjamins" they say. Same here - the more you steal, the more points you get.',
  "thief_screen.info_tip_max_amount_pockets":
    "This represents the Maximum amount of how much you can fit in you till you deposit in your Vault. Huge bag makes your pockets deeper.",
  "thief_shop_Items.info_tip_fake_id":
    "When caught during robbery - you loose suspicion points. This item regains your points and keeps you out of Jail. Use from Thief page.",
  "thief_shop_Items.info_tip_snack":
    "When making robberies - you get tired. Treat the snak as your RedBull! Once you run out of Stamina - the snak gets you back in business! Use from Thief page.",
  "thief_shop_Items.info_tip_huge_bag":
    "This item is a dream come true! Once activated - you boost your LOOT carrying and you get to rob 50% more! Expires with every Vault Deposit and activated from your Thief page.",
  "backend_upgrade.err_finish_robbery":
    "You can’t Upgrade League/Tier while executing a robbery",
  "invite_earn.info_text_conversion": "1M LOOT = apx. 77 Stars",
  "invite_earn.info_text_conversion_link": "https://tokenthieves.com",
  "thief_menu.Thief_menu_wallet_cta": "Add your TON wallet",
  "withdraw_packages.info_tip_withdraw":
    " Here you can withdraw your loot in STARS. Based on your vault loot you are given the packages you can choose from.",
};
