-- up
create table notes (
  id      serial,
  title   text,
  content text,
  date timestamp
);

---

-- down
drop table if exists notes;
