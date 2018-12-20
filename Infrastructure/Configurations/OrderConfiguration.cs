using ApplicationCore.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Configurations
{
    public class OrderConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.HasKey(o => o.OrderId);
            builder.Property(o => o.OrderId).HasColumnName("OrderID");
            builder.Property(o => o.CustomerId)
                .HasColumnName("CustomerID")
                .HasMaxLength(5);
            builder.Property(o => o.OrderType).IsRequired().HasMaxLength(20);
            builder.Property(o => o.MovingFrom).IsRequired().HasMaxLength(240);
            builder.Property(o => o.MovingTo).IsRequired().HasMaxLength(240);
            builder.Property(o => o.MovedDate).IsRequired().HasColumnType("datetime");
            builder.HasOne(o => o.Customer)
                .WithMany(c => c.Orders)
                .HasConstraintName("FK_Orders_Customers");
            builder.HasQueryFilter(o => !o.IsDeleted);
        }
    }
}