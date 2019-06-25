import { withDiscordAuth } from "./guards";
import ServerImageBrowser from "@/components/dashboard/guild/images/ImageBrowser";
import ServerHome from "@/components/dashboard/guild/GuildHome";
import DashboardHome from "@/components/dashboard/DashboardHome";
import Dashboard from "@/views/dashboard/Dashboard";
import DashboardSettings from "@/components/dashboard/DashboardSettings";
import GuildSettings from "@/components/dashboard/guild/GuildSettings";
import Guild from "@/views/dashboard/Guild";
import ImageView from "@/views/dashboard/ImageView";
import SupportServer from "../views/dashboard/SupportServer";
import Premium from "../views/dashboard/static/Premium";
import Developers from "../views/dashboard/static/Developers";
import Profile from "../views/dashboard/static/Profile";

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
      path: "invite",
      name: "support-server",
      component: SupportServer
    },
    {
      path: "settings",
      name: "settings",
      component: DashboardSettings
    },
    {
      path: "developers",
      name: "developers",
      component: Developers
    },
    {
      path: "profile",
      name: "profile",
      component: Profile
    },
    {
      path: "premium",
      name: "premium",
      component: Premium
    },
    {
      path: ":guild_id",
      component: Guild,
      children: [
        {
          path: "image/:id",
          name: "image",
          component: ImageView
        },
        {
          path: "contributors",
          name: "guild-contributors",
        },
        {
          path: "stars",
          name: "guild-stars"
        },
        {
          path: "tags",
          name: "guild-tags"
        },
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
        },
        {
          path: "tags",
          name: "guild-tags"
        }
      ]
    }
  ]
};
