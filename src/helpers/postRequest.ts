export async function postRequest(endPoint: string, postBody: any) {
    if (!(postBody?.email || postBody?.password)) return;

    const response = await fetch(`${endPoint}`, {
        method: "POST",
        body: JSON.stringify(postBody),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return await response.json();
}
