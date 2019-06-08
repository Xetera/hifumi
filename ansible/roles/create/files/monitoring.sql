-- this password doesn't mean anything
create user datadog with password 'dankmemes';
grant select on pg_stat_database to datadog;
grant pg_monitor to datadog;
