import Main from "../Main";
import React from "react";
import Header from "../Header";


const Post1 = () => {
    const post1 = "# Sample blog post\n" +
        "\n" +
        "_April 1, 2020 by [Olivier](/)_\n" +
        "\n" +
        "This blog post shows a few different types of content that are supported and styled with\n" +
        "Material styles. Basic typography, images, and code are all supported.\n" +
        "You can extend these by modifying `Markdown.js`.\n" +
        "\n" +
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\n" +
        "Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\n" +
        "\n" +
        "Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.\n" +
        "Nullam id dolor id nibh ultricies vehicula ut id elit.\n" +
        "\n" +
        "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\n" +
        "Aenean lacinia bibendum nulla sed consectetur.\n" +
        "\n" +
        "## Heading\n" +
        "\n" +
        "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\n" +
        "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\n" +
        "Morbi leo risus, porta ac consectetur ac, vestibulum at eros.\n" +
        "\n" +
        "### Sub-heading 1\n" +
        "\n" +
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
        "\n" +
        "### Sub-heading 2\n" +
        "\n" +
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
        "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.\n" +
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo\n" +
        "sit amet risus.\n" +
        "\n" +
        "- Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n" +
        "- Donec id elit non mi porta gravida at eget metus.\n" +
        "- Nulla vitae elit libero, a pharetra augue.\n" +
        "\n" +
        "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.\n" +
        "\n" +
        "1. Vestibulum id ligula porta felis euismod semper.\n" +
        "1. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
        "1. Maecenas sed diam eget risus varius blandit sit amet non magna.\n" +
        "\n" +
        "Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.";
    const post2 = "# Another blog post\n" +
        "\n" +
        "_March 23, 2020 by [Matt](/)_\n" +
        "\n" +
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.\n" +
        "Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.\n" +
        "\n" +
        "Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo.\n" +
        "Nullam id dolor id nibh ultricies vehicula ut id elit.\n" +
        "\n" +
        "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\n" +
        "Aenean lacinia bibendum nulla sed consectetur.\n" +
        "\n" +
        "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\n" +
        "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.\n" +
        "Morbi leo risus, porta ac consectetur ac, vestibulum at eros.";
    const post3 = "# New feature\n" +
        "\n" +
        "_March 14, 2020 by [Tom](/)_\n" +
        "\n" +
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
        "Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.\n" +
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,\n" +
        "ut fermentum massa justo sit amet risus.\n" +
        "\n" +
        "- Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\n" +
        "- Donec id elit non mi porta gravida at eget metus.\n" +
        "- Nulla vitae elit libero, a pharetra augue.\n" +
        "\n" +
        "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.\n" +
        "Aenean lacinia bibendum nulla sed consectetur.\n" +
        "\n" +
        "Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.";
    const posts = [post1, post2, post3];
    const sections = [
        {title: 'Technology', url: '#'},
        {title: 'Design', url: '#'},
        {title: 'Culture', url: '#'},
        {title: 'Business', url: '#'},
        {title: 'Politics', url: '#'},
        {title: 'Opinion', url: '#'},
        {title: 'Science', url: '#'},
        {title: 'Health', url: '#'},
        {title: 'Style', url: '#'},
        {title: 'Travel', url: '#'},
    ];
    return (
        <div>
            <Header sections={sections} title={"Sample blog post"}/>
            <Main title="From the firehose" posts={posts}/>
        </div>
    )
}
export default Post1;
