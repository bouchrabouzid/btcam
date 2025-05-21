create table menu_Items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(50) NOT NULL,
    item_price SMALLINT DEFAULT 0
);

select * from menu_Items 