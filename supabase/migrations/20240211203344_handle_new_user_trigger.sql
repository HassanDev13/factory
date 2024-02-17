/**
 * This trigger automatically creates a user entry when a new user signs up via Supabase Auth.
 */
create function public.handle_new_user() returns trigger 
as 
$$
begin
	insert into
	    public.users (user_id , email)
	values (
	        new.id,     
            new.email
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