<template>
  <div>
    <div class="md:flex items-center pb-10 mb-10 border-b space-y-8 md:space-y-0 md:mx-20 text-center md:text-left" v-for="(project, i) in projects" :key="project.title" :class="{ 'md:text-right': i % 2 !== 0 }">
      <img class="rounded-full w-48 h-48 inline md:mr-8" :class="{ 'md:order-2': i % 2 !== 0, 'md:mr-0': i % 2 !== 0, 'md:ml-8': i % 2 !== 0 }" :src="project.thumbnail.src" :alt="project.thumbnail.alt">
      <div class="space-y-8">
        <h3 class="text-2xl">{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="space-x-2">
          <a class="bg-purple-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-purple-500" v-for="link in project.links" :key="link.text" :href="link.href">{{ link.text }}</a>
        </div>
      </div>
    </div>

    <p class="text-center text-2xl mt-20">
      You can see <strong>hundreds</strong> more examples of my work on my
      <a class="text-purple-600 hover:text-purple-500" href="https://github.com/travishorn">GitHub profile</a>
      and
      <a class="text-purple-600 hover:text-purple-500" href="https://codepen.io/travishorn">CodePen profile</a>.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Magna sed ultrices",
          description: "Morbi mattis ornare ornare. Duis quam turpis, gravida at leo elementum elit fusce accumsan dui libero, quis vehicula lectus ultricies eu. In convallis amet leo non sapien iaculis efficitur consequat lorem ipsum.",
          links: [
            {
              text: "Live Example",
              href: "#"
            },
            {
              text: "Code",
              href: "#"
            }
          ],
          thumbnail: {
            src: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
            alt: "Programmer"
          }
        },
        {
          title: "Magna sed ultrices",
          description: "Morbi mattis ornare ornare. Duis quam turpis, gravida at leo elementum elit fusce accumsan dui libero, quis vehicula lectus ultricies eu. In convallis amet leo non sapien iaculis efficitur consequat lorem ipsum.",
          links: [
            {
              text: "Live Example",
              href: "#"
            },
            {
              text: "Code",
              href: "#"
            }
          ],
          thumbnail: {
            src: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
            alt: "Programmer"
          }
        },
        {
          title: "Magna sed ultrices",
          description: "Morbi mattis ornare ornare. Duis quam turpis, gravida at leo elementum elit fusce accumsan dui libero, quis vehicula lectus ultricies eu. In convallis amet leo non sapien iaculis efficitur consequat lorem ipsum.",
          links: [
            {
              text: "Live Example",
              href: "#"
            },
            {
              text: "Code",
              href: "#"
            }
          ],
          thumbnail: {
            src: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
            alt: "Programmer"
          }
        },
        {
          title: "Magna sed ultrices",
          description: "Morbi mattis ornare ornare. Duis quam turpis, gravida at leo elementum elit fusce accumsan dui libero, quis vehicula lectus ultricies eu. In convallis amet leo non sapien iaculis efficitur consequat lorem ipsum.",
          links: [
            {
              text: "Live Example",
              href: "#"
            },
            {
              text: "Code",
              href: "#"
            }
          ],
          thumbnail: {
            src: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
            alt: "Programmer"
          }
        }
      ]
    };
  }
}
</script>
