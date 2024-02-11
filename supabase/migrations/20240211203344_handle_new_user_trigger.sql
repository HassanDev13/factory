/**
 * This trigger automatically creates a user entry when a new user signs up via Supabase Auth.
 */
create function public.handle_new_user() returns trigger 
as 
$$
begin
	insert into
	    public.users (user_id , first_name, last_name , email,gender,country_id)
	values (
	        new.id,
            new.raw_user_meta_data ->> 'first_name',
            new.raw_user_meta_data ->> 'last_name',
            new.raw_user_meta_data ->> 'email',
           CAST(new.raw_user_meta_data ->> 'gender' AS user_gender),
            (NEW.raw_user_meta_data ->> 'country_id')::INT     
	    );
	return new;
end;
$$
language
plpgsql 

security definer;

create trigger on_auth_user_created after
insert
    on auth.users for each row
execute procedure public.handle_new_user ();