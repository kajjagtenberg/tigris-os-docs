# Object Caching

Tigris behaves like a Content Delivery Network (CDN) with no work on your part.
Unlike traditional CDNs, though, it handles dynamic data in a way that provides
strong guarantees around freshness of data.

Tigris transparently caches the objects close to the user to provide low-latency
access. The region chosen for caching the objects depends on the request
pattern from the users. Objects stored in San Jose but requested frequently from
Sydney will result in getting cached in the Sydney region. Caching is provided
through a distributed global caching layer with cache nodes deployed in regions
globally. This ensures that user requests can be served from the region closest
to the user.

Object caching requires no configuration and is enabled by default on all
buckets.

## Cache Headers

By default, Tigris honors the cache headers set by the user when writing the
object, and returns those headers as part of the response when the object is
fetched. This allows the user to control the caching behavior of the object.

### Public Buckets

Tigris sets default cache header for public buckets for static assets if no
cache headers are provided by the user. The default cache header is set to
`Cache-Control: public, max-age=3600`. This applies to the following static
assets:

| Category                 | MIME types                                                      |
| ------------------------ | --------------------------------------------------------------- |
| Web assets               | text/css text/ecmascript text/javascript application/javascript |
| Fonts                    | Any Content-Type matching font/\*                               |
| Images                   | Any Content-Type matching image/\*                              |
| Videos                   | Any Content-Type matching video/\*                              |
| Audio                    | Any Content-Type matching audio/\*                              |
| Formatted document types | application/pdf and application/postscript                      |

## Caching on PUT (Eager Caching)

In addition to the default caching behavior, Tigris provides a way to eagerly
cache objects on write. This is useful when you know that an object will be
frequently accessed from a region different from the region where the object is
written.

:::note

We have found Cache-on-Read to be sufficient for most of the use cases and the
most cost-effective, but Cache-on-Write is available for use cases that need it.

:::

The AWS CLI and SDKs can be used to enable eager caching on write. The following
example shows how to enable eager caching on write using the AWS CLI

```sh
aws s3api put-bucket-accelerate-configuration \
	--bucket foo-bucket \
	--accelerate-configuration Status=Enabled
```
