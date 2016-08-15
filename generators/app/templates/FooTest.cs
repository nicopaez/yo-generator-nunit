namespace <%= namespace %>
{
      using NUnit.Framework;

      [TestFixture]
      public class FooTest
      {
          [Test]
          public void DoFooShouldReturnFoo()
          {
              var foo = new Foo();
              Assert.AreEqual("foo", foo.DoFoo());
          }
      }
}