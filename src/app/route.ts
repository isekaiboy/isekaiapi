import { NextResponse, NextRequest } from "next/server";

const description = {
    instagram: 'https://www.instagram.com/robertus_ferdinand/'
}

export async function GET(request: NextRequest) {


    return NextResponse.json({ status: 200, description })
}