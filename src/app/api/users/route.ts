import { db } from "../../../../db/db";

export async function GET(request: Request) {
  try {
    // const { searchParams } = new URL(request.url);
    // const id = searchParams.get("id");
    const result = await db.query.users.findMany({
      with: {
        country : true
      }
    })

    return Response.json(result);
  } catch (error) {
    console.error(error);
    return Response.json({ error: error });
  }
}
export async function POST(request: Request) {
  //   const { searchParams } = new URL(request.url);
  //   const id = searchParams.get("id");
  // get all user use drizzle-orm
  const result = db.query.users.findMany({
    with: {
      country : true
    }
  })

  return Response.json(result);
}
