import { withDiscordAuth } from "./guards";
import ServerImageBrowser from "@/components/dashboard/guild/images/ServerImageBrowser";
import ServerHome from "@/components/dashboard/guild/GuildHome";
import DashboardHome from "@/components/dashboard/DashboardHome";
import Dashboard from "@/views/dashboard/Dashboard";
import DashboardSettings from "@/components/dashboard/DashboardSettings";
import GuildSettings from "@/components/dashboard/guild/GuildSettings";

export default {
  ...withDiscordAuth,
  path: "/dashboard",
  component: Dashboard,
  children: [
    {
      path: "",
      name: "home",
      component: DashboardHome
    },
    {
      path: "settings",
      name: "settings",
      component: DashboardSettings
    },
    {
      path: ":guild_id",
      component: ServerHome,
      children: [
        {
          path: "",
          name: "guild-home",
          component: ServerHome
        },
        {
          path: "settings",
          name: "guild-settings",
          component: GuildSettings
        },
        {
          path: "images",
          name: "guild-images",
          component: ServerImageBrowser
        }
      ]
    }
  ]
};
