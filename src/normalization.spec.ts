import data from "./data.json";
import { reducer, AppState } from "./normalization";

describe("Normalized Posts", () => {
  it("reducer should take in un-normalized posts and normalize them", () => {
    const actual: AppState = reducer(data);
    const expected: AppState = {
      entities: {
        comments: {
          jsyrjkxwtpmu: {
            id: "jsyrjkxwtpmu",
            userId: "hqhhywrxpprz",
            body: "Sint deserunt assumenda voluptas doloremque repudiandae. Et magni voluptatem ut consequatur velit autem omnis reiciendis exercitationem. Esse totam minima. Fugit libero natus velit molestiae autem officiis vel.",
            createdAt: "Fri, 25 Sep 2020 18:03:26 GMT",
          },
          xqwfeomenbih: {
            id: "xqwfeomenbih",
            userId: "klpvstlbcmvx",
            body: "Quas omnis et sit aut aspernatur sit unde dicta. Quia delectus in voluptate provident. Voluptatem commodi sunt et placeat eos inventore. Saepe eos atque quos quae enim libero. Provident quis cupiditate ex nulla.",
            createdAt: "Mon, 28 Sep 2020 04:42:15 GMT",
          },
          masffvxrkbpy: {
            id: "masffvxrkbpy",
            userId: "xcvzaeuonhbb",
            body: "Aut dolorum nostrum veniam repellat non ut tempore nisi. Blanditiis ut saepe qui sint officiis quibusdam. Dolores adipisci minus dolor accusantium quod mollitia officiis quo architecto.",
            createdAt: "Sun, 27 Sep 2020 03:11:48 GMT",
          },
        },
        posts: {
          xlkxhemkuiam: {
            id: "xlkxhemkuiam",
            userId: "lswamlcggqlw",
            body: "Beatae distinctio libero voluptates nobis voluptatem. Autem minima cupiditate et molestiae nihil. Omnis possimus inventore doloremque quam consequatur. Consequatur minima rem. Aliquid hic in eligendi corporis odio velit fuga vel.",
            createdAt: "Tue, 22 Sep 2020 16:28:53 GMT",
            title: "voluptates sequi et praesentium eos consequatur cumque omnis",
            comments: ["jsyrjkxwtpmu"],
          },
          iplxaztsfihe: {
            id: "iplxaztsfihe",
            userId: "mxoxcnhesbgh",
            body: "Soluta quis aut ducimus sed eos omnis nobis sunt nostrum. Cum itaque delectus et error doloremque. Occaecati voluptates aut molestias in voluptate nihil nulla ut odit.",
            createdAt: "Sat, 26 Sep 2020 14:11:39 GMT",
            title: "velit rerum et unde illo eum officia in",
            comments: ["xqwfeomenbih", "masffvxrkbpy"],
          },
        },
        users: {
          lswamlcggqlw: {
            id: "lswamlcggqlw",
            handle: "Payton_Carter",
            imgUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/dawidwu/128.jpg",
          },
          hqhhywrxpprz: {
            id: "hqhhywrxpprz",
            handle: "Orlo97",
            imgUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/ponchomendivil/128.jpg",
          },
          mxoxcnhesbgh: {
            id: "mxoxcnhesbgh",
            handle: "Foster.Kovacek10",
            imgUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/grrr_nl/128.jpg",
          },
          klpvstlbcmvx: {
            id: "klpvstlbcmvx",
            handle: "Rossie15",
            imgUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/bobbytwoshoes/128.jpg",
          },
          xcvzaeuonhbb: {
            id: "xcvzaeuonhbb",
            handle: "Perry68",
            imgUrl: "https://s3.amazonaws.com/uifaces/faces/twitter/jesseddy/128.jpg",
          },
        },
      },
    };

    expect(actual).toStrictEqual(expected);
  });
});
