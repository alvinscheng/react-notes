-- up
create table notes (
  id      serial,
  title   text,
  note_content text,
  note_date timestamp
);

---

-- down
drop table if exists notes;
