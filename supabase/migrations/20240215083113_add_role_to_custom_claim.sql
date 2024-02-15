CREATE FUNCTION add_role_to_custom_claim()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  PERFORM set_claim(NEW.user_id::UUID, 'roles'::TEXT, ARRAY_TO_JSON(NEW.roles)::jsonb);
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_role_update_add_role_to_custom_claim
AFTER UPDATE ON "roles"
FOR EACH ROW
EXECUTE FUNCTION add_role_to_custom_claim();