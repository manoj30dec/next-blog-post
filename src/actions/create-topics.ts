"use server"

export async function createTopics(formData: FormData) {
    // todo: revalidate the home page after create topic
    const name = formData.get('name');
    const description = formData.get('description')
    console.log(name, description)
}