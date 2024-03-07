import { Pool } from "pg";
import * as dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

dotenv.config({ path: "../.env.local" });

const main = async () => {
  const client = new Pool({
    connectionString:
      process.env.DATABASE_URL ??
      "postgresql://postgres:postgres@localhost:54322/postgres",
  });

  // Roles seeder
  const rolesData = ["admin", "supervisor", "student"];

  // Delete all data from the table
  await client.query("DELETE FROM auth.users CASCADE");
  await client.query("DELETE FROM auth.identities CASCADE");
  await client.query("DELETE FROM users_to_roles CASCADE");
  await client.query("DELETE FROM roles CASCADE");
  await client.query("DELETE FROM users CASCADE");
  await client.query("DELETE FROM country CASCADE");

  const rolesInsertPromises = rolesData.map((roleName) => {
    return client.query(`
    INSERT INTO roles (
      id,
      roles
    ) VALUES (
      '${uuidv4()}',
      '${roleName}'
    )
  `);
  });

  await Promise.all(rolesInsertPromises);

  const users = [];

  for (let i = 0; i < 3; i++) {
    const password = bcrypt.hashSync("password", bcrypt.genSaltSync());
    const email = `user${i + 1}@example.com`;

    users.push({
      instance_id: "00000000-0000-0000-0000-000000000000",
      id: uuidv4(),
      aud: "authenticated",
      role: "authenticated",
      email: email,
      encrypted_password: password,
      email_confirmed_at: new Date().toISOString(),
      recovery_sent_at: new Date().toISOString(),
      last_sign_in_at: new Date().toISOString(),
      raw_app_meta_data: '{"provider":"email","providers":["email"]}',
      raw_user_meta_data: "{}",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      confirmation_token: "",
      email_change: "",
      email_change_token_new: "",
      recovery_token: "",
    });
  }

  const insertPromises = users.map((user) => {
    return client.query(`
      INSERT INTO auth.users (
        instance_id,
        id,
        aud,
        role,
        email,
        encrypted_password,
        email_confirmed_at,
        recovery_sent_at,
        last_sign_in_at,
        raw_app_meta_data,
        raw_user_meta_data,
        created_at,
        updated_at,
        confirmation_token,
        email_change,
        email_change_token_new,
        recovery_token
      ) VALUES (
        '${user.instance_id}',
        '${user.id}',
        '${user.aud}',
        '${user.role}',
        '${user.email}',
        '${user.encrypted_password}',
        '${user.email_confirmed_at}',
        '${user.recovery_sent_at}',
        '${user.last_sign_in_at}',
        '${user.raw_app_meta_data}',
        '${user.raw_user_meta_data}',
        '${user.created_at}',
        '${user.updated_at}',
        '${user.confirmation_token}',
        '${user.email_change}',
        '${user.email_change_token_new}',
        '${user.recovery_token}'
      )
    `);
  });

  await Promise.all(insertPromises);

  const insertPromisesId = users.map((user) => {
    return client.query(`
	  INSERT INTO auth.identities (
		id,
		user_id,
		provider_id,
		identity_data,
		provider,
		last_sign_in_at,
		created_at,
		updated_at
	  ) (
		SELECT
		  uuid_generate_v4(),
		  '${user.id}',
		  '${user.id}',
		  format('{"sub":"%s","email":"%s"}', '${user.id}', '${user.email}')::jsonb,
		  'email',
		  '${user.created_at}',
		  '${user.created_at}',
		  '${user.updated_at}'
	  )
	`);
  });
  await Promise.all(insertPromisesId);

  // Country seeder
  const countries = ["USA", "Canada", "UK"];

  const countryInsertPromises = countries.map((countryName) => {
    return client.query(`
    INSERT INTO country (
      id,
      name,
      soft_delete
    ) VALUES (
      '${uuidv4()}',
      '${countryName}',
      false
    )
  `);
  });

  await Promise.all(countryInsertPromises);

  // get first role id
  const roleId = (await client.query("SELECT id FROM roles LIMIT 1")).rows[0]
    .id;

  const usersRolesInsertPromises = users.map((user) => {
    return client.query(`
    INSERT INTO users_to_roles (
      user_id,
      role_id
    ) VALUES (
      '${user.id}',
      '${roleId}'
    )
  `);
  });

  await Promise.all(usersRolesInsertPromises);

  console.log("Data inserted successfully");
  client.end();
};

main();
