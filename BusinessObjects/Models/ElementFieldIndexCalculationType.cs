namespace forCrowd.WealthEconomy.BusinessObjects
{
    public enum ElementFieldIndexCalculationType : byte
    {
        /// <summary>
        /// Default type.
        /// Uses the lowest score as the base (reference) rating in the group, then calculates the difference from that base.
        /// Base rating (lowest) gets 0 from the pool and other items get an amount based on their difference.
        /// Aims to maximize the benefit of the pool.
        /// </summary>
        Aggressive = 1,

        /// <summary>
        /// Sums all ratings and calculates the percentages.
        /// All items get an amount, including the lowest scored item.
        /// Good for cases that only use 'Resource Pool - Initial Amount' feature.
        /// </summary>
        Passive = 2
    }
}
