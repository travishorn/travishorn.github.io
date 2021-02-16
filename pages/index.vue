<template>
  <div>
    <div class="max-w-5xl mx-auto">
      <div class="md:flex items-center pb-10 mb-10 md:pb-20 md:mb-20 border-b space-y-8 md:space-y-0 md:mx-20 text-center md:text-left" v-for="(project, i) in projects" :key="project.title" :class="{ 'md:text-right': i % 2 !== 0 }">
        <img class="rounded-full w-48 h-48 inline md:mr-8 shadow-lg" :class="{ 'md:order-2': i % 2 !== 0, 'md:mr-0': i % 2 !== 0, 'md:ml-8': i % 2 !== 0 }" :src="project.thumbnail.src" :alt="project.thumbnail.alt">
        <div class="space-y-8">
          <h3 class="text-2xl">{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="space-x-2">
            <a class="bg-purple-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-purple-500" v-for="link in project.links" :key="link.text" :href="link.href">{{ link.text }}</a>
          </div>
        </div>
      </div>
    </div>

    <p class="text-center text-2xl mt-20">
      You can see <strong>hundreds</strong> more examples of my work on my
      <a class="link-purple" href="https://github.com/travishorn">GitHub profile</a>
      and
      <a class="link-purple" href="https://codepen.io/travishorn">CodePen profile</a>.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Session Timeout",
          description: "An all-in-one library that helps site visitors manage session timeouts. After a set amount of time, a warning message is displayed with options for the user to end their session or stay connected. Highly configurable and highly styleable.",
          links: [
            {
              text: "Live Example",
              href: "https://travishorn.github.io/session-timeout/"
            },
            {
              text: "Code",
              href: "https://github.com/travishorn/session-timeout"
            }
          ],
          thumbnail: {
            src: "/thumbnails/session-timeout.png",
            alt: "Thumbnail screenshot of a modal alert warning the user their session is about to expire."
          }
        },
        {
          title: "Transit Map",
          description: "A live real-time, real-world map of the vehicles currently being operated by the Massachusetts Bay Transportation Authority. Requires no backend and uses server-sent events from the MBTA API.",
          links: [
            {
              text: "Live Example",
              href: "https://codepen.io/travishorn/full/aMabLE"
            },
            {
              text: "Code",
              href: "https://codepen.io/travishorn/pen/aMabLE?editors=0010"
            }
          ],
          thumbnail: {
            src: "/thumbnails/transit-map.png",
            alt: "Thumbnail screenshot of a map of the Massachusetts Bay with markers for vehicles operated by the MBTA."
          }
        },
        {
          title: "Webfile",
          description: "A purpose-built Node.js server which acts as a web-based file browser. Point it at a directory and run the server.",
          links: [
            {
              text: "Demo Video",
              href: "https://github.com/travishorn/webfile/blob/master/webfile-demo.gif"
            },
            {
              text: "Code",
              href: "https://github.com/travishorn/webfile"
            }
          ],
          thumbnail: {
            src: "/thumbnails/webfile.png",
            alt: "Thumbnail screenshot of a web-based directory browser."
          }
        },
        {
          title: "Integer at nisl lacinia",
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
            src: "/thumbnails/project-4.png",
            alt: "Screenshot of Massachusetts Bay transit map"
          }
        }
      ]
    };
  }
}
</script>
