SET xmloption = content;
CREATE TABLE public.images (
    message_id text,
    guild_id text,
    url text NOT NULL,
    id integer NOT NULL,
    file_name text,
    user_id text,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    public boolean DEFAULT false NOT NULL
);
CREATE TABLE public.tag_counts (
    name text NOT NULL,
    count bigint NOT NULL,
    guild_id text NOT NULL
);
COMMENT ON TABLE public.tag_counts IS 'Metadata table, leave blank';
CREATE TABLE public.image_tags (
    id integer NOT NULL,
    name text NOT NULL,
    tagger_id text,
    image_id integer NOT NULL
);
CREATE TABLE public.auto_tags (
    channel_id text NOT NULL,
    id integer NOT NULL,
    name text NOT NULL
);
CREATE SEQUENCE public.auto_tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.auto_tags_id_seq OWNED BY public.auto_tags.id;
CREATE TABLE public.guilds (
    guild_id text NOT NULL,
    enabled boolean,
    welcome_channel text,
    name text NOT NULL,
    icon text
);
CREATE TABLE public.image_channels (
    channel_id text NOT NULL,
    assigner_id text NOT NULL,
    guild_id text NOT NULL
);
CREATE SEQUENCE public.image_tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.image_tags_id_seq OWNED BY public.image_tags.id;
CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;
CREATE TABLE public.members (
    id integer NOT NULL,
    user_id text NOT NULL,
    guild_id text NOT NULL
);
CREATE SEQUENCE public.members_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.members_id_seq OWNED BY public.members.id;
CREATE TABLE public.users (
    user_id text NOT NULL,
    name text,
    avatar text
);
ALTER TABLE ONLY public.auto_tags ALTER COLUMN id SET DEFAULT nextval('public.auto_tags_id_seq'::regclass);
ALTER TABLE ONLY public.image_tags ALTER COLUMN id SET DEFAULT nextval('public.image_tags_id_seq'::regclass);
ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);
ALTER TABLE ONLY public.members ALTER COLUMN id SET DEFAULT nextval('public.members_id_seq'::regclass);
ALTER TABLE ONLY public.auto_tags
    ADD CONSTRAINT auto_tags_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.guilds
    ADD CONSTRAINT guilds_pkey PRIMARY KEY (guild_id);
ALTER TABLE ONLY public.image_channels
    ADD CONSTRAINT image_channels_pkey PRIMARY KEY (channel_id);
ALTER TABLE ONLY public.image_tags
    ADD CONSTRAINT image_tags_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_counts
    ADD CONSTRAINT tag_counts_pkey PRIMARY KEY (name);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
ALTER TABLE ONLY public.auto_tags
    ADD CONSTRAINT auto_tags_channel_id_fkey FOREIGN KEY (channel_id) REFERENCES public.image_channels(channel_id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.image_channels
    ADD CONSTRAINT image_channels_assigner_id_fkey FOREIGN KEY (assigner_id) REFERENCES public.users(user_id);
ALTER TABLE ONLY public.image_channels
    ADD CONSTRAINT image_channels_guild_id_fkey FOREIGN KEY (guild_id) REFERENCES public.guilds(guild_id);
ALTER TABLE ONLY public.image_tags
    ADD CONSTRAINT image_tags_image_id_fkey FOREIGN KEY (image_id) REFERENCES public.images(id);
ALTER TABLE ONLY public.image_tags
    ADD CONSTRAINT image_tags_tagger_id_fkey FOREIGN KEY (tagger_id) REFERENCES public.users(user_id);
ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_guild_id_fkey FOREIGN KEY (guild_id) REFERENCES public.guilds(guild_id);
ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_guild_id_fkey FOREIGN KEY (guild_id) REFERENCES public.guilds(guild_id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON UPDATE RESTRICT ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_counts
    ADD CONSTRAINT tag_counts_guild_id_fkey FOREIGN KEY (guild_id) REFERENCES public.guilds(guild_id) ON UPDATE RESTRICT ON DELETE CASCADE;

CREATE FUNCTION public.random_image(tag text) RETURNS SETOF public.images
    LANGUAGE sql STABLE
    AS $$
   WITH results AS (
        SELECT images FROM images
        LEFT OUTER JOIN image_tags 
            ON image_tags.image_id = images.id
        WHERE image_tags.name = 'holo'
    ) SELECT * FROM results OFFSET floor(random()* (SELECT COUNT(*) FROM results)) LIMIT 1;
$$;
CREATE FUNCTION public.random_tagged_image(tag text) RETURNS SETOF public.images
    LANGUAGE sql STABLE
    AS $$
   WITH results AS (
        SELECT images FROM images
        LEFT OUTER JOIN image_tags 
            ON image_tags.image_id = images.id
        WHERE image_tags.name = tag
    ) SELECT * FROM results OFFSET floor(random()* (SELECT COUNT(*) FROM results)) LIMIT 1;
$$;
CREATE FUNCTION public.tag_count() RETURNS SETOF public.tag_counts
    LANGUAGE sql STABLE
    AS $$
SELECT
    distinct image_tags.name as "name",
    COUNT(name) AS "count",
  images.guild_id as "guild_id"
FROM
  image_tags
INNER JOIN images 
ON images.id = image_tags.image_id
GROUP BY
  name, images.guild_id 
  $$;